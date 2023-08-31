import React from 'react';
import classNames from 'classnames';
import { useField } from 'formik';
import CONSTANTS from '../../../constants';

const ImageUpload = props => {
  const [field] = useField(props.name);
  const {classes: {uploadContainer, inputContainer, imgStyle} } = props;
  const onChange = e => {
    const node = window.document.getElementById('image-preview');
    const file = e.target.files[0];
    const imageType = /image.*/;
    if (!file.type.match(imageType)) {
      e.target.value = '';
    } else {
      field.onChange(field.name);
      const reader = new FileReader();
      reader.onload = () => {
        node.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <div className={uploadContainer}>
      <div className={inputContainer}>
        <span>Support only images (*.png, *.gif, *.jpeg)</span>
        <input
          {...field}
          id='file-input'
          type='file'
          accept='.jpg, .png, .jpeg'
          onChange={onChange}
        />
        <label htmlFor='file-input'>Chose file</label>
      </div>
      <img
        id='image-preview'
        src={
          field.name
            ? CONSTANTS.ANONYM_IMAGE_PATH
            : `${CONSTANTS.publicURL}${field.name}`
        }
        className={classNames({ [imgStyle]: !!field.name })}
        alt='user'
      />
    </div>
  );
};

export default ImageUpload;
