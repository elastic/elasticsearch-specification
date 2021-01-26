/**
 * @type_stability stable
 */
class CloneIndexResponse extends AcknowledgedResponseBase {
  index: string
  shards_acknowledged: boolean
}
