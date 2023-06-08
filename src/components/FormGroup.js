import Form from "react-bootstrap/Form";

const FormGroup = ({ type, name, placeholder, onChange, value }) => {
  return (
    <Form.Group className="mb-4 col-lg-6" controlId={type}>
      <Form.Control
        type={type}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </Form.Group>
  );
};

export default FormGroup;
