import { useForm } from 'react-hook-form';

const FileUploadForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('file', data.file[0]);

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        console.log(result);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="file" {...register('file')} />
            <button type="submit">Upload</button>
        </form>
    );
};

export default FileUploadForm;
