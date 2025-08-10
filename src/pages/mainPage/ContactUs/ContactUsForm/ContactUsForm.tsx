import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./ContactUsForm.css";
import { useTranslation } from "react-i18next";
import type { FormData } from "../../../../Tyeps";
import { ContactUsFormSchema } from "../../../../components/forms/formValidationSchema";

const ContactUsForm = () => {
  const { t } = useTranslation();

  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const initialValues: FormData = {
    name: "",
    email: "",
    message: "",
  };

  const onSubmit = (values: FormData, { resetForm }: any) => {
    console.log("تم إرسال البيانات:", values);
    setSubmittedData(values);
    resetForm();
  };

  return (
    <div className="form-page-container">
      <Formik
        initialValues={initialValues}
        validationSchema={ContactUsFormSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">{t("form.name_label")}</label>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder={t("form.name_placeholder")}
                className={errors.name && touched.name ? "form-error" : ""}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t("form.email_label")}</label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder={t("form.email_placeholder")}
                className={errors.email && touched.email ? "form-error" : ""}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t("form.message_label")}</label>
              <Field
                as="textarea"
                name="message"
                id="message"
                placeholder={t("form.message_placeholder")}
                className={
                  errors.message && touched.message ? "form-error" : ""
                }
              />
              <ErrorMessage
                name="message"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-button">
              <button type="submit" disabled={isSubmitting}>
                {t("form.submit_button")}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUsForm;
