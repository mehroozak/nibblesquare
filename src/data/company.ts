import {
  Compass,
  Eye,
  Gauge,
  Handshake,
  MessagesSquare,
  Wrench,
} from "lucide-react";

import type { ProcessStep, Value } from "@/types/content";

/** PLACEHOLDER: the story below is invented. Replace with the real history. */
export const companyStory = {
  founded: "2019", // PLACEHOLDER
  headline: "We started because too much software is shipped and then abandoned.",
  paragraphs: [
    "Nibble Square began with a small team who had spent years watching well-funded projects arrive late, launch loudly, and then quietly rot. The pattern was rarely a lack of talent. It was software built by people who would never have to live with it.",
    "So we built the company around the opposite arrangement. We stay close to the thing we make. We run our own product, Passlay, in production — which means we carry a pager, answer support tickets, and feel every shortcut we were tempted to take. That experience shapes how we build for clients.",
    "Today we are a small senior team taking on a deliberately limited number of engagements at a time. We would rather do a handful of things properly than staff a pipeline.",
  ],
};

/** PLACEHOLDER copy — the values themselves are a reasonable starting point. */
export const values: Value[] = [
  {
    title: "Build things that hold up",
    description:
      "Software is judged on the day something goes wrong, not the day it launches. We build for the second one — tests, monitoring, sensible failure modes, and no clever tricks nobody else can maintain.",
    icon: Gauge,
  },
  {
    title: "Say the inconvenient thing",
    description:
      "If a feature is a bad idea or a deadline is not real, you will hear it from us early. We have talked clients out of work more than once, and it has never cost us a relationship.",
    icon: MessagesSquare,
  },
  {
    title: "Understand the work first",
    description:
      "We start by learning how the job is done today, including the workarounds. Most bad software comes from skipping that step and building what was asked for rather than what was needed.",
    icon: Compass,
  },
  {
    title: "Leave it maintainable",
    description:
      "Every engagement ends with documentation, tests and a team that can carry it on. We are not interested in being a dependency.",
    icon: Wrench,
  },
  {
    title: "Work in the open",
    description:
      "Progress, blockers and estimates stay visible throughout. No status theatre, no surprises in week eleven of a twelve-week project.",
    icon: Eye,
  },
  {
    title: "Treat it as a partnership",
    description:
      "We work directly with the people who use what we build, and stay past launch. The interesting problems only show up once real users arrive.",
    icon: Handshake,
  },
];

/** PLACEHOLDER: adjust to describe your actual engagement process. */
export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description:
      "We sit with the people doing the work, map the current process end to end, and find where the real cost is. Usually it is not where anyone expected.",
  },
  {
    step: "02",
    title: "Shape",
    description:
      "We turn that into a scoped plan with an architecture, a sequence and honest estimates — including what we would cut first if time gets tight.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Two-week cycles, working software at the end of each one. You see progress continuously rather than at a milestone review.",
  },
  {
    step: "04",
    title: "Run",
    description:
      "We launch, watch what real usage does to our assumptions, fix what breaks, and hand over something your team can own.",
  },
];

/** PLACEHOLDER figures — replace or remove before launch. */
export const companyStats = [
  { label: "Founded", value: "2019" },
  { label: "Team", value: "8" },
  { label: "Products in production", value: "1" },
  { label: "Client engagements", value: "30+" },
];
