package org.elasticsearch;

import java.io.IOException;

public interface TriConsumerIO<T, U, V> {
  void accept(T t, U u, V v) throws IOException;
}
