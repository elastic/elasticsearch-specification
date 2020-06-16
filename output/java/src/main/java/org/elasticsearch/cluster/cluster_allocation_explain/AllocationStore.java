
package org.elasticsearch.cluster.cluster_allocation_explain;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;

public class AllocationStore  implements XContentable<AllocationStore> {
  
  static final ParseField ALLOCATION_ID = new ParseField("allocation_id");
  private String _allocationId;
  public String getAllocationId() { return this._allocationId; }
  public AllocationStore setAllocationId(String val) { this._allocationId = val; return this; }


  static final ParseField FOUND = new ParseField("found");
  private Boolean _found;
  public Boolean getFound() { return this._found; }
  public AllocationStore setFound(Boolean val) { this._found = val; return this; }


  static final ParseField IN_SYNC = new ParseField("in_sync");
  private Boolean _inSync;
  public Boolean getInSync() { return this._inSync; }
  public AllocationStore setInSync(Boolean val) { this._inSync = val; return this; }


  static final ParseField MATCHING_SIZE_IN_BYTES = new ParseField("matching_size_in_bytes");
  private Long _matchingSizeInBytes;
  public Long getMatchingSizeInBytes() { return this._matchingSizeInBytes; }
  public AllocationStore setMatchingSizeInBytes(Long val) { this._matchingSizeInBytes = val; return this; }


  static final ParseField MATCHING_SYNC_ID = new ParseField("matching_sync_id");
  private Boolean _matchingSyncId;
  public Boolean getMatchingSyncId() { return this._matchingSyncId; }
  public AllocationStore setMatchingSyncId(Boolean val) { this._matchingSyncId = val; return this; }


  static final ParseField STORE_EXCEPTION = new ParseField("store_exception");
  private String _storeException;
  public String getStoreException() { return this._storeException; }
  public AllocationStore setStoreException(String val) { this._storeException = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_allocationId != null) {
      builder.field(ALLOCATION_ID.getPreferredName(), _allocationId);
    }
    if (_found != null) {
      builder.field(FOUND.getPreferredName(), _found);
    }
    if (_inSync != null) {
      builder.field(IN_SYNC.getPreferredName(), _inSync);
    }
    if (_matchingSizeInBytes != null) {
      builder.field(MATCHING_SIZE_IN_BYTES.getPreferredName(), _matchingSizeInBytes);
    }
    if (_matchingSyncId != null) {
      builder.field(MATCHING_SYNC_ID.getPreferredName(), _matchingSyncId);
    }
    if (_storeException != null) {
      builder.field(STORE_EXCEPTION.getPreferredName(), _storeException);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AllocationStore fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AllocationStore.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AllocationStore, Void> PARSER =
    new ObjectParser<>(AllocationStore.class.getName(), false, AllocationStore::new);

  static {
    PARSER.declareString(AllocationStore::setAllocationId, ALLOCATION_ID);
    PARSER.declareBoolean(AllocationStore::setFound, FOUND);
    PARSER.declareBoolean(AllocationStore::setInSync, IN_SYNC);
    PARSER.declareLong(AllocationStore::setMatchingSizeInBytes, MATCHING_SIZE_IN_BYTES);
    PARSER.declareBoolean(AllocationStore::setMatchingSyncId, MATCHING_SYNC_ID);
    PARSER.declareString(AllocationStore::setStoreException, STORE_EXCEPTION);
  }

}
