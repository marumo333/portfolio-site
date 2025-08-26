export interface GitHubRepoInfo {
  owner: string;
  repo: string;
}

export async function getReadmeContent(githubUrl: string): Promise<string> {
  try {
    // GitHub URLからownerとrepoを抽出
    const match = githubUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!match) {
      throw new Error('Invalid GitHub URL');
    }
    
    const [, owner, repo] = match;
    
    // GitHub APIでREADMEを取得
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'portfolio-site'
        }
      }
    );
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('リポジトリまたはREADMEが見つかりません');
      } else if (response.status === 403) {
        throw new Error('APIレート制限に達しました。しばらく待ってから再試行してください');
      } else {
        throw new Error(`GitHub API エラー: ${response.status}`);
      }
    }
    
    const data = await response.json();
    
    // Base64でエンコードされたREADMEの内容をデコード
    const content = Buffer.from(data.content.replace(/\n/g, ''), 'base64').toString('utf-8');
    return content;
    
  } catch (error) {
    console.error('Error fetching README:', error);
    throw error;
  }
}

export function extractRepoInfo(githubUrl: string): GitHubRepoInfo | null {
  const match = githubUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
  if (!match) {
    return null;
  }
  
  return {
    owner: match[1],
    repo: match[2]
  };
}
