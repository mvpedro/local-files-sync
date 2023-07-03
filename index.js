require("dotenv").config();
const simpleGit = require("simple-git");

const git = simpleGit();

async function syncFilesToGit() {
  try {
    const gitRepoUrl = process.env.GIT_REPO_URL;
    const folderPath = process.env.FOLDER_PATH;

    await git.cwd(folderPath);
    await git.add("./*");
    await git.commit(`Sync at ${new Date()}`);
    await git.push(gitRepoUrl, "main");

    console.log("Files synced and committed to Git successfully!");
  } catch (error) {
    console.error("An error occurred while syncing files to Git:", error);
  }
}

syncFilesToGit();
