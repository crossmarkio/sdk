import type { VersionInput, VersionOutput } from "../models/version";

export type VersionMethod = (input: VersionInput) => Promise<VersionOutput>;
