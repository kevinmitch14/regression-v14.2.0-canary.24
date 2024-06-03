import React from "react";
import { testActionHome } from "./actions";

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function HomePage() {
  await delay(200);
  return (
    <div>
      <p>Time: {new Date().getTime()}</p>
      <form action={testActionHome}>
        <button>Submit</button>
      </form>
    </div>
  );
}
