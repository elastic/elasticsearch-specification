
package org.elasticsearch.x_pack.machine_learning.job.detectors;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum MetricFunction implements XContentable<MetricFunction> {
  Min("Min"),
    Max("Max"),
    Median("Median"),
    HighMedian("HighMedian"),
    LowMedian("LowMedian"),
    Mean("Mean"),
    HighMean("HighMean"),
    LowMean("LowMean"),
    Metric("Metric"),
    Varp("Varp"),
    HighVarp("HighVarp"),
    LowVarp("LowVarp");
  private final String textRepresentation;

  private MetricFunction(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public MetricFunction fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, MetricFunction, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "Min": return MetricFunction.Min;
      case "Max": return MetricFunction.Max;
      case "Median": return MetricFunction.Median;
      case "HighMedian": return MetricFunction.HighMedian;
      case "LowMedian": return MetricFunction.LowMedian;
      case "Mean": return MetricFunction.Mean;
      case "HighMean": return MetricFunction.HighMean;
      case "LowMean": return MetricFunction.LowMean;
      case "Metric": return MetricFunction.Metric;
      case "Varp": return MetricFunction.Varp;
      case "HighVarp": return MetricFunction.HighVarp;
      case "LowVarp": return MetricFunction.LowVarp;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, MetricFunction.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
