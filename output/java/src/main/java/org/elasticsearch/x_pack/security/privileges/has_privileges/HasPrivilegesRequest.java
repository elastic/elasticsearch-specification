
package org.elasticsearch.x_pack.security.privileges.has_privileges;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.security.privileges.has_privileges.*;
import org.elasticsearch.common_abstractions.request.*;

public class HasPrivilegesRequest extends RequestBase<HasPrivilegesRequest> implements XContentable<HasPrivilegesRequest> {
  
  static final ParseField APPLICATION = new ParseField("application");
  private List<ApplicationPrivilegesCheck> _application;
  public List<ApplicationPrivilegesCheck> getApplication() { return this._application; }
  public HasPrivilegesRequest setApplication(List<ApplicationPrivilegesCheck> val) { this._application = val; return this; }

  static final ParseField CLUSTER = new ParseField("cluster");
  private List<String> _cluster;
  public List<String> getCluster() { return this._cluster; }
  public HasPrivilegesRequest setCluster(List<String> val) { this._cluster = val; return this; }

  static final ParseField INDEX = new ParseField("index");
  private List<IndexPrivilegesCheck> _index;
  public List<IndexPrivilegesCheck> getIndex() { return this._index; }
  public HasPrivilegesRequest setIndex(List<IndexPrivilegesCheck> val) { this._index = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_application != null) {
      builder.array(APPLICATION.getPreferredName(), _application);
    }
    if (_cluster != null) {
      builder.array(CLUSTER.getPreferredName(), _cluster);
    }
    if (_index != null) {
      builder.array(INDEX.getPreferredName(), _index);
    }
  }

  @Override
  public HasPrivilegesRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HasPrivilegesRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HasPrivilegesRequest, Void> PARSER =
    new ObjectParser<>(HasPrivilegesRequest.class.getName(), false, HasPrivilegesRequest::new);

  static {
    PARSER.declareObjectArray(HasPrivilegesRequest::setApplication, (p, t) -> ApplicationPrivilegesCheck.PARSER.apply(p, t), APPLICATION);
    PARSER.declareStringArray(HasPrivilegesRequest::setCluster, CLUSTER);
    PARSER.declareObjectArray(HasPrivilegesRequest::setIndex, (p, t) -> IndexPrivilegesCheck.PARSER.apply(p, t), INDEX);
  }

}
