
package org.elasticsearch.x_pack.security.privileges.delete_privileges;

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
import org.elasticsearch.x_pack.security.privileges.delete_privileges.*;
import org.elasticsearch.common_abstractions.response.*;

public class DeletePrivilegesResponse extends DictionaryResponseBase<String, NamedContainer<String, FoundUserPrivilege>> implements XContentable<DeletePrivilegesResponse> {
  
  static final ParseField APPLICATIONS = new ParseField("applications");
  private NamedContainer<String, NamedContainer<String, FoundUserPrivilege>> _applications;
  public NamedContainer<String, NamedContainer<String, FoundUserPrivilege>> getApplications() { return this._applications; }
  public DeletePrivilegesResponse setApplications(NamedContainer<String, NamedContainer<String, FoundUserPrivilege>> val) { this._applications = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_applications != null) {
      builder.field(APPLICATIONS.getPreferredName());
      _applications.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public DeletePrivilegesResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeletePrivilegesResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeletePrivilegesResponse, Void> PARSER =
    new ObjectParser<>(DeletePrivilegesResponse.class.getName(), false, DeletePrivilegesResponse::new);

  static {
    PARSER.declareObject(DeletePrivilegesResponse::setApplications, (p, t) -> new NamedContainer<>(n -> () -> n,null /* TODO NamedContainer<String, FoundUserPrivilege> */), APPLICATIONS);
  }

}
