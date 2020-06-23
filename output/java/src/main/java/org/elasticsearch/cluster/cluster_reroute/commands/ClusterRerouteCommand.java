
package org.elasticsearch.cluster.cluster_reroute.commands;

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


public class ClusterRerouteCommand  implements XContentable<ClusterRerouteCommand> {
  
  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public ClusterRerouteCommand setName(String val) { this._name = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterRerouteCommand fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterRerouteCommand.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterRerouteCommand, Void> PARSER =
    new ObjectParser<>(ClusterRerouteCommand.class.getName(), false, ClusterRerouteCommand::new);

  static {
    PARSER.declareString(ClusterRerouteCommand::setName, NAME);
  }

}
