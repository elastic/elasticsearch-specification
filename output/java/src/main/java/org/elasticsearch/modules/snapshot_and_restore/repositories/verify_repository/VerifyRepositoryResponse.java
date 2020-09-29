
package org.elasticsearch.modules.snapshot_and_restore.repositories.verify_repository;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.modules.snapshot_and_restore.repositories.verify_repository.*;
import org.elasticsearch.common_abstractions.response.*;

public class VerifyRepositoryResponse extends ResponseBase<VerifyRepositoryResponse> implements XContentable<VerifyRepositoryResponse> {
  
  static final ParseField NODES = new ParseField("nodes");
  private NamedContainer<String, CompactNodeInfo> _nodes;
  public NamedContainer<String, CompactNodeInfo> getNodes() { return this._nodes; }
  public VerifyRepositoryResponse setNodes(NamedContainer<String, CompactNodeInfo> val) { this._nodes = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_nodes != null) {
      builder.field(NODES.getPreferredName());
      _nodes.toXContent(builder, params);
    }
  }

  @Override
  public VerifyRepositoryResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return VerifyRepositoryResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<VerifyRepositoryResponse, Void> PARSER =
    new ObjectParser<>(VerifyRepositoryResponse.class.getName(), false, VerifyRepositoryResponse::new);

  static {
    PARSER.declareObject(VerifyRepositoryResponse::setNodes, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> CompactNodeInfo.PARSER.apply(pp, null)), NODES);
  }

}
