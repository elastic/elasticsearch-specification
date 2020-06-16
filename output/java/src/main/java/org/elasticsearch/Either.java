package org.elasticsearch;

import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.ConstructingObjectParser;
import org.elasticsearch.mapping.meta_fields.source.SourceField;
import sun.reflect.generics.reflectiveObjects.NotImplementedException;

import java.util.Optional;
import java.util.function.Function;

public class Either<A, B> {
  // TODO should be protected after we fix the generated Either parsing
  public Either() {}

  public <C, E extends Exception> C map(CheckedFunction<? super A, ? extends C, E> left,
                                        CheckedFunction<? super B, ? extends C, E> right) throws E {
    throw new NotImplementedException();
  }

  public static <A, B> Either<A,B> left(A value) {
    return new Either<A,B>() {
      @Override
      public <C, E extends Exception> C map(
        CheckedFunction<? super A, ? extends C, E> left,
        CheckedFunction<? super B, ? extends C, E> right) throws E {
        return left.apply(value);
      }
    };
  }

  public static <A, B> Either<A,B> right(B value) {
    return new Either<A,B>() {
      @Override
      public <C, E extends Exception> C map(
        CheckedFunction<? super A, ? extends C, E> left,
        CheckedFunction<? super B, ? extends C, E> right) throws E {
        return right.apply(value);
      }
    };
  }
}
