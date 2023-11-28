import { useState, useEffect } from 'react';
import { BiSolidCloudUpload } from 'react-icons/bi';
import AnimatedListView from './AnimatedListView ';
import CustomLoader from './CutomLoader';
import CustomButton from './CustomButton';

function PdfUpload({ onUploadComplete }) {
    const [pdfFiles, setPdfFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);

        if (selectedFiles.length + pdfFiles.length > 20) {
            alert('Maximum 20 files are allowed.');
            return;
        }
        const uniquePdfFiles = [...new Set([...pdfFiles, ...selectedFiles])];
        const uniqueArray = uniquePdfFiles.filter((obj, index, self) =>
            self.findIndex(o => o.name === obj.name) === index
        );

        setPdfFiles(uniqueArray);
    };

    const removeFile = (data) => {
        const updatedData = pdfFiles?.filter(item => {
            if (item?.name !== data?.name && item?.lastModified !== data?.lastModified) {
                return item
            }
        });
        setPdfFiles(updatedData)
    };

    const uploadNextFile = () => {
        // setIsLoading(true)
        if (pdfFiles.length > 0) {
            setPdfFiles([])
            setUploading(false)
            onUploadComplete(pdfFiles)
        }
    };

    useEffect(() => {
        if (uploading) {
            uploadNextFile();
        }
    }, [uploading]);

    return (
        <div className="w-full h-full py-4 px-1 max-h-[300px] bg-white rounded-lg ">
            {isLoading && <CustomLoader />}
            <div className="flex items-start h-full gap-5 transition-all duration-300 ">
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full border-2 border-blue-B40 border-dashed rounded-lg cursor-pointer h-[270px] bg-gray-50  hover:bg-[#ebf2fe] hover:border-opacity-60 ">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <BiSolidCloudUpload className='w-10 h-10' />
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">PDF (MAX. 20 files)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" accept=".pdf" multiple onChange={handleFileChange} disabled={uploading} />
                    </label>
                </div>
                {pdfFiles?.length > 0 && <div className="flex flex-col justify-between w-full h-full gap-3 ">
                    <AnimatedListView handleDelete={removeFile} data={pdfFiles} />
                    <div className='flex justify-between pr-3 '>
                        <div className='w-auto lg:w-[130px] h-10'>
                            <CustomButton name="Cancel" handleClick={() => setPdfFiles([])} isDisable={false}>
                            </CustomButton>
                        </div>
                        <div className='w-auto lg:w-[130px] h-10'>
                            <CustomButton name="Submit" handleClick={() => setUploading(true)} isDisable={false}>
                            </CustomButton>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default PdfUpload;
