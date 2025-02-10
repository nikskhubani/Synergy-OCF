import axios from "axios";

const config = {
  tokenEndpoint:
    "https://scg-token-manager.azurewebsites.net/api/gettokentrigger", // production
  captchaRoute: "recaptcha",
};

export async function verifyCaptchaAsync(captchaToken: unknown) {
  try {
    const requestBody = {
      route: config.captchaRoute,
      recaptchaToken: captchaToken,
    };

    const {data} = await axios.post(`${config.tokenEndpoint}`, requestBody)
    console.log("Data", data)
    return true
  } catch (error) {
    console.error(error);
    throw new Error("Captcha verification failed");
  }
}
