const validation = (values) => {

    let errors = {};

    if(!values.name)
    {
        errors.name='Name is required';
    }
    if(!values.firstName)
    {
        errors.firstName='First name is required.';
    }
    if(!values.email)
    {
        errors.email='Email is required.';
    }
    if(!values.subject)
    {
        errors.subject='Subject is required.';
    }
    if(!values.message)
    {
        errors.message='Message is required.';
    }

    else if (!/\S+@\S+\.\S+/.test(values.email))
    {
        errors.email='Email is invalid.'
    }
  return errors;
}

export default validation