
package org.elasticsearch.cluster.nodes_info;

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

public class NodeInfoJvmMemory  implements XContentable<NodeInfoJvmMemory> {
  
  static final ParseField DIRECT_MAX = new ParseField("direct_max");
  private String _directMax;
  public String getDirectMax() { return this._directMax; }
  public NodeInfoJvmMemory setDirectMax(String val) { this._directMax = val; return this; }


  static final ParseField DIRECT_MAX_IN_BYTES = new ParseField("direct_max_in_bytes");
  private Long _directMaxInBytes;
  public Long getDirectMaxInBytes() { return this._directMaxInBytes; }
  public NodeInfoJvmMemory setDirectMaxInBytes(Long val) { this._directMaxInBytes = val; return this; }


  static final ParseField HEAP_INIT = new ParseField("heap_init");
  private String _heapInit;
  public String getHeapInit() { return this._heapInit; }
  public NodeInfoJvmMemory setHeapInit(String val) { this._heapInit = val; return this; }


  static final ParseField HEAP_INIT_IN_BYTES = new ParseField("heap_init_in_bytes");
  private Long _heapInitInBytes;
  public Long getHeapInitInBytes() { return this._heapInitInBytes; }
  public NodeInfoJvmMemory setHeapInitInBytes(Long val) { this._heapInitInBytes = val; return this; }


  static final ParseField HEAP_MAX = new ParseField("heap_max");
  private String _heapMax;
  public String getHeapMax() { return this._heapMax; }
  public NodeInfoJvmMemory setHeapMax(String val) { this._heapMax = val; return this; }


  static final ParseField HEAP_MAX_IN_BYTES = new ParseField("heap_max_in_bytes");
  private Long _heapMaxInBytes;
  public Long getHeapMaxInBytes() { return this._heapMaxInBytes; }
  public NodeInfoJvmMemory setHeapMaxInBytes(Long val) { this._heapMaxInBytes = val; return this; }


  static final ParseField NON_HEAP_INIT = new ParseField("non_heap_init");
  private String _nonHeapInit;
  public String getNonHeapInit() { return this._nonHeapInit; }
  public NodeInfoJvmMemory setNonHeapInit(String val) { this._nonHeapInit = val; return this; }


  static final ParseField NON_HEAP_INIT_IN_BYTES = new ParseField("non_heap_init_in_bytes");
  private Long _nonHeapInitInBytes;
  public Long getNonHeapInitInBytes() { return this._nonHeapInitInBytes; }
  public NodeInfoJvmMemory setNonHeapInitInBytes(Long val) { this._nonHeapInitInBytes = val; return this; }


  static final ParseField NON_HEAP_MAX = new ParseField("non_heap_max");
  private String _nonHeapMax;
  public String getNonHeapMax() { return this._nonHeapMax; }
  public NodeInfoJvmMemory setNonHeapMax(String val) { this._nonHeapMax = val; return this; }


  static final ParseField NON_HEAP_MAX_IN_BYTES = new ParseField("non_heap_max_in_bytes");
  private Long _nonHeapMaxInBytes;
  public Long getNonHeapMaxInBytes() { return this._nonHeapMaxInBytes; }
  public NodeInfoJvmMemory setNonHeapMaxInBytes(Long val) { this._nonHeapMaxInBytes = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_directMax != null) {
      builder.field(DIRECT_MAX.getPreferredName(), _directMax);
    }
    if (_directMaxInBytes != null) {
      builder.field(DIRECT_MAX_IN_BYTES.getPreferredName(), _directMaxInBytes);
    }
    if (_heapInit != null) {
      builder.field(HEAP_INIT.getPreferredName(), _heapInit);
    }
    if (_heapInitInBytes != null) {
      builder.field(HEAP_INIT_IN_BYTES.getPreferredName(), _heapInitInBytes);
    }
    if (_heapMax != null) {
      builder.field(HEAP_MAX.getPreferredName(), _heapMax);
    }
    if (_heapMaxInBytes != null) {
      builder.field(HEAP_MAX_IN_BYTES.getPreferredName(), _heapMaxInBytes);
    }
    if (_nonHeapInit != null) {
      builder.field(NON_HEAP_INIT.getPreferredName(), _nonHeapInit);
    }
    if (_nonHeapInitInBytes != null) {
      builder.field(NON_HEAP_INIT_IN_BYTES.getPreferredName(), _nonHeapInitInBytes);
    }
    if (_nonHeapMax != null) {
      builder.field(NON_HEAP_MAX.getPreferredName(), _nonHeapMax);
    }
    if (_nonHeapMaxInBytes != null) {
      builder.field(NON_HEAP_MAX_IN_BYTES.getPreferredName(), _nonHeapMaxInBytes);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public NodeInfoJvmMemory fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodeInfoJvmMemory.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodeInfoJvmMemory, Void> PARSER =
    new ObjectParser<>(NodeInfoJvmMemory.class.getName(), false, NodeInfoJvmMemory::new);

  static {
    PARSER.declareString(NodeInfoJvmMemory::setDirectMax, DIRECT_MAX);
    PARSER.declareLong(NodeInfoJvmMemory::setDirectMaxInBytes, DIRECT_MAX_IN_BYTES);
    PARSER.declareString(NodeInfoJvmMemory::setHeapInit, HEAP_INIT);
    PARSER.declareLong(NodeInfoJvmMemory::setHeapInitInBytes, HEAP_INIT_IN_BYTES);
    PARSER.declareString(NodeInfoJvmMemory::setHeapMax, HEAP_MAX);
    PARSER.declareLong(NodeInfoJvmMemory::setHeapMaxInBytes, HEAP_MAX_IN_BYTES);
    PARSER.declareString(NodeInfoJvmMemory::setNonHeapInit, NON_HEAP_INIT);
    PARSER.declareLong(NodeInfoJvmMemory::setNonHeapInitInBytes, NON_HEAP_INIT_IN_BYTES);
    PARSER.declareString(NodeInfoJvmMemory::setNonHeapMax, NON_HEAP_MAX);
    PARSER.declareLong(NodeInfoJvmMemory::setNonHeapMaxInBytes, NON_HEAP_MAX_IN_BYTES);
  }

}
