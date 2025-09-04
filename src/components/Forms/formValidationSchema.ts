import * as Yup from "yup";
import type { TFunction } from "i18next";

export const getContactUsFormSchema = (t: TFunction) => {
  return Yup.object({
    name: Yup.string().required(t("form.name_required")),
    email: Yup.string()
      .email(t("form.email_invalid"))
      .required(t("form.email_required")),
    message: Yup.string()
      .required(t("form.message_required"))
      .min(20, t("form.message_min_length")),
  });
};