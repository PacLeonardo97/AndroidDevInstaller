import { GlobalStyle } from './styles/GlobalStyle'
const fs = window.require('fs')
const path = window.require('path')

const copyFileSync = (source: string, target: string) => {
  let targetFile = target

  // If target is a directory, a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source))
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source))
}

const copyFolderRecursiveSync = (source: string, target: string) => {
  let files: string[] = []
  // Check if folder needs to be created or integrated
  const targetFolder = path.join(target, path.basename(source))
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder)
  }

  // Copy
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source)
    files.forEach(file => {
      const curSource = path.join(source, file)
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder)
      } else {
        copyFileSync(curSource, targetFolder)
      }
    })
  }
}

export function App() {
  const handleClickWindows = () => {
    copyFolderRecursiveSync(`${process.cwd()}/Android`, `${process.cwd()}/src`)
  }
  return (
    <>
      <GlobalStyle />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          height: '400px',
          gap: '16px',
          alignItems: 'center',
        }}
      >
        <button onClick={() => handleClickWindows()}>Windows</button>
      </div>
    </>
  )
}
