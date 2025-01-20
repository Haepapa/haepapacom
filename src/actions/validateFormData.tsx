export const validateFormData = (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  const errors: { [key: string]: string } = {};

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    errors.email = "Invalid email address";
  }

  // Basic profanity check (example list, you can expand this)
  const profanityList = ["badword1", "badword2"];
  const containsProfanity = (text: string) => {
    return profanityList.some((word) => text.toLowerCase().includes(word));
  };

  if (containsProfanity(formData.name)) {
    errors.name = "Name contains inappropriate language";
  }

  if (containsProfanity(formData.message)) {
    errors.message = "Message contains inappropriate language";
  }

  // Basic length checks
  if (formData.name.trim().length === 0) {
    errors.name = "Name is required";
  }

  if (formData.email.trim().length === 0) {
    errors.email = "Email is required";
  }

  if (formData.message.trim().length === 0) {
    errors.message = "Message is required";
  }

  if (formData.message.trim().length > 1000) {
    errors.message =
      "Message is too long, please shorten to 1000 characters or less";
  }

  return errors;
};
