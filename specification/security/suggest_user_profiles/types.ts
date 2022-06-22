import { UserProfileId } from "@security/_types/UserProfile"
import { SingleKeyDictionary } from "@spec_utils/Dictionary"

export class Hint {
  /**
   * A list of Profile UIDs to match against. 
   */
  uids?: UserProfileId[]
  /**
   * A single key-value pair to match against the labels section
   * of a profile. A profile is considered matching if it matches
   * at least one of the strings. 
   */
  labels?: SingleKeyDictionary<string, HintLabelValue>
}

export type HintLabelValue = string | string[]
