import * as Yup from "yup";
import i18n from "i18next";

export const ContactUsFormSchema = Yup.object({
  name: Yup.string().required(i18n.t("form.name_required")),
  email: Yup.string()
    .email(i18n.t("form.email_invalid"))
    .required(i18n.t("form.email_required")),
  message: Yup.string()
    .required(i18n.t("form.message_required"))
    .min(20, i18n.t("form.message_min_length")),
});
