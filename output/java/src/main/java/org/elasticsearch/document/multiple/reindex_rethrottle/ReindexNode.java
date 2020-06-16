
package org.elasticsearch.document.multiple.reindex_rethrottle;

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
import org.elasticsearch.common_abstractions.infer.task_id.*;
import org.elasticsearch.document.multiple.reindex_rethrottle.*;

public class ReindexNode  implements XContentable<ReindexNode> {
  
  static final ParseField ATTRIBUTES = new ParseField("attributes");
  private NamedContainer<String, String> _attributes;
  public NamedContainer<String, String> getAttributes() { return this._attributes; }
  public ReindexNode setAttributes(NamedContainer<String, String> val) { this._attributes = val; return this; }


  static final ParseField HOST = new ParseField("host");
  private String _host;
  public String getHost() { return this._host; }
  public ReindexNode setHost(String val) { this._host = val; return this; }


  static final ParseField IP = new ParseField("ip");
  private String _ip;
  public String getIp() { return this._ip; }
  public ReindexNode setIp(String val) { this._ip = val; return this; }


  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public ReindexNode setName(String val) { this._name = val; return this; }


  static final ParseField ROLES = new ParseField("roles");
  private List<String> _roles;
  public List<String> getRoles() { return this._roles; }
  public ReindexNode setRoles(List<String> val) { this._roles = val; return this; }


  static final ParseField TASKS = new ParseField("tasks");
  private NamedContainer<TaskId, ReindexTask> _tasks;
  public NamedContainer<TaskId, ReindexTask> getTasks() { return this._tasks; }
  public ReindexNode setTasks(NamedContainer<TaskId, ReindexTask> val) { this._tasks = val; return this; }


  static final ParseField TRANSPORT_ADDRESS = new ParseField("transport_address");
  private String _transportAddress;
  public String getTransportAddress() { return this._transportAddress; }
  public ReindexNode setTransportAddress(String val) { this._transportAddress = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_attributes != null) {
      builder.field(ATTRIBUTES.getPreferredName());
      _attributes.toXContent(builder, params);
    }
    if (_host != null) {
      builder.field(HOST.getPreferredName(), _host);
    }
    if (_ip != null) {
      builder.field(IP.getPreferredName(), _ip);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_roles != null) {
      builder.array(ROLES.getPreferredName(), _roles);
    }
    if (_tasks != null) {
      builder.field(TASKS.getPreferredName());
      _tasks.toXContent(builder, params);
    }
    if (_transportAddress != null) {
      builder.field(TRANSPORT_ADDRESS.getPreferredName(), _transportAddress);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ReindexNode fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ReindexNode.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ReindexNode, Void> PARSER =
    new ObjectParser<>(ReindexNode.class.getName(), false, ReindexNode::new);

  static {
    PARSER.declareObject(ReindexNode::setAttributes, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.text()), ATTRIBUTES);
    PARSER.declareString(ReindexNode::setHost, HOST);
    PARSER.declareString(ReindexNode::setIp, IP);
    PARSER.declareString(ReindexNode::setName, NAME);
    PARSER.declareStringArray(ReindexNode::setRoles, ROLES);
    PARSER.declareObject(ReindexNode::setTasks, (p, t) -> new NamedContainer<>(n -> () -> new TaskId(n),pp -> ReindexTask.PARSER.apply(pp, null)), TASKS);
    PARSER.declareString(ReindexNode::setTransportAddress, TRANSPORT_ADDRESS);
  }

}
