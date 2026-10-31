import { Manifest } from "deno-slack-sdk/mod.ts";
import HttpbinWorkflow from "./External_API_Calls/workflows/ephemeral_message.ts";
export default Manifest({
  name: "loving-goat-352",
  description: "A blank template for building Slack apps with Deno",
  icon: "assets/default_new_app_icon.png",
  functions: [],
  workflows: [HttpbinWorkflow],
  outgoingDomains: [
    "local.workspacepro.xyz",
  ],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
