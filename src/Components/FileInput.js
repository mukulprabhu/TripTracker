import React from 'react'

const FileInput = ({ onSelectFile }) => {
    const importFile = (e) => {
        console.log('file', e.target.files[0])
        const fileReader = new FileReader();


        fileReader.onload = (e) => {
            const file = e.target.result;
            const readSSVArr = file.split(/\r\n|\n/);
            onSelectFile(readSSVArr);
        }

        fileReader.onerror = (e) => {
            console.log('FileImportError', e.target.error.name)
        }

        fileReader.readAsText(e.target.files[0]);
    }

    return (
        <div>
            <input type='file' onChange={importFile} />
        </div>
    )
}

export default FileInput
