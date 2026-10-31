import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";
import "std/dotenv/load.ts";
export const def = DefineFunction({
  callback_id: "httpbin_get",
  title: "Receive data from an url endpoint",
  source_file: "External_API_Calls/functions/httpbin_get.ts",
  input_parameters: { properties: {}, required: [] },
  output_parameters: {
    properties: {
      data: { type: Schema.types.string },
    },
    required: [],
  },
});
export default SlackFunction(def, async ({env}) => {
const res = await fetch('http://local.workspacepro.xyz:9001/2018-06-01/runtime/invocation/next');
const data = await res.text();
const headers = Object.fromEntries(res.headers.entries());

console.log('Response body:', data);
console.log('Status:', res.status);
console.log('Headers:', headers);
  return {
    outputs: {
      data : data,
    },
  };
});

