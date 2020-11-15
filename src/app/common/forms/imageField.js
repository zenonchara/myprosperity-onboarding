import React from "react";
import { Field, FieldArray } from "redux-form";

class ImageInput extends React.Component {
  constructor() {
    super();

    this.defaultState = {
      name: "",
      size: "",
      type: "",
      data: "",
    };

    this.state = this.defaultState;
  }

  componentDidMount() {
    if (this.props.meta.initial && this.props.meta.initial.length > 1) {
      this.setState(JSON.parse(this.props.meta.initial));
    }
  }

  render() {
    var self = this;

    const {
      input: { value, onChange },
      meta: { touched, error },
    } = this.props;

    function handleChangeImage(evt) {
      var reader = new FileReader();
      var file = evt.target.files[0];
      reader.onload = function (upload) {
        const data = {
          name: file.name,
          size: file.size,
          type: file.type,
          data: upload.target.result,
        };
        self.setState(data, () => onChange(JSON.stringify(data)));
      };
      reader.readAsDataURL(file);
    }

    return (
      <>
        <div className="form-control file-upload">
          <input
            id={`${this.props.id}`}
            ref="file"
            type="file"
            onChange={handleChangeImage}
            encType="multipart/form-data"
            className="file-upload-input"
          />

          <div className="file-upload-filename">
            <img className="file-upload-preview" src={this.state.data} />
            {this.state.name}
          </div>
        </div>
        {touched && error && (
          <small className="form-text text-danger">{error}</small>
        )}
      </>
    );
  }
}

export class ImageField extends React.Component {
  render() {
    return (
      <Field
        component={ImageInput}
        type={this.props.type}
        className="form-control"
        id={`input-${this.props.id}`}
        name={this.props.name}
      />
    );
  }
}
