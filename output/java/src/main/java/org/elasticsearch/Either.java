package org.elasticsearch;

import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.ConstructingObjectParser;
import org.elasticsearch.common.xcontent.ToXContent;
import org.elasticsearch.common.xcontent.XContentBuilder;
import org.elasticsearch.common.xcontent.XContentParseException;
import org.elasticsearch.common.xcontent.XContentParser;

import java.io.IOException;
import java.util.Optional;
import java.util.function.Function;

public class Either<A extends XContentable<A>, B extends XContentable<B>> implements XContentable<Either<A,B>> {
  // TODO should be protected after we fix the generated Either parsing
  public Either() {}

  public <C, E extends Exception> C map(CheckedFunction<? super A, ? extends C, E> left,
                                        CheckedFunction<? super B, ? extends C, E> right) throws E {
    throw new UnsupportedOperationException();
  }

  public static <A extends XContentable<A>, B extends XContentable<B>> Either<A, B> left(A value) {
    return new Either<A,B>() {
      @Override
      public <C, E extends Exception> C map(
        CheckedFunction<? super A, ? extends C, E> left,
        CheckedFunction<? super B, ? extends C, E> right) throws E {
        return left.apply(value);
      }
    };
  }

  public static <A extends XContentable<A>, B extends XContentable<B>> Either<A,B> right(B value) {
    return new Either<A,B>() {
      @Override
      public <C, E extends Exception> C map(
        CheckedFunction<? super A, ? extends C, E> left,
        CheckedFunction<? super B, ? extends C, E> right) throws E {
        return right.apply(value);
      }
    };
  }

  @Override
  public Either<A, B> fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return null;
  }

  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    // TODO
  }
}
