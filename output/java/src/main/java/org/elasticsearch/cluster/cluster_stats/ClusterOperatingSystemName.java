
package org.elasticsearch.cluster.cluster_stats;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;

public class ClusterOperatingSystemName  implements XContentable<ClusterOperatingSystemName> {
  
  static final ParseField COUNT = new ParseField("count");
  private int _count;
  private boolean _count$isSet;
  public int getCount() { return this._count; }
  public ClusterOperatingSystemName setCount(int val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public ClusterOperatingSystemName setName(String val) { this._name = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
  }

  @Override
  public ClusterOperatingSystemName fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterOperatingSystemName.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterOperatingSystemName, Void> PARSER =
    new ObjectParser<>(ClusterOperatingSystemName.class.getName(), false, ClusterOperatingSystemName::new);

  static {
    PARSER.declareInt(ClusterOperatingSystemName::setCount, COUNT);
    PARSER.declareString(ClusterOperatingSystemName::setName, NAME);
  }

}
