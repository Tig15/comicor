import { I18n } from "i18n-js";
import chTranslate from "./ch.json";

const i18n = new I18n();
i18n.translations = {
  ch: chTranslate,
};

i18n.locale = "ch";

export function translate(key: string) {
  return i18n.t(key);
}

console.log("Your Home", translate("home_category"));
