const filePickerElement = document.getElementById('image');
const imagePreviewElement = document.getElementById('image-preview');

function showPreview()
{
    const files = filePickerElement.files ;
    if(!files || files.length == 0 )
    {
        imagePreviewElement.style.display = 'none';
        return ; 
    }
    const file = files[0];
    imagePreviewElement.style.display = 'block';
    imagePreviewElement.src = URL.createObjectURL(file);
}

filePickerElement.addEventListener('change' , showPreview);