"use strict";

const Route = use("Route");

Route.get("/", () => {
  return { greeting: "API Omni Stack Saas em funcionamento." };
});

Route.post("/auth/login", "AuthController.login");
