# Elasticsearch API design guidelines

This document aims to provide a set of design guidelines for drawing up HTTP APIs in a way that is consistent and easy to consume. These concerns are becoming ever more important, as the number of API consumers grows, and as new systems are built upon these lower layers. One such project involves the automatic generation of API documentation, the existence of which is crucial for the effective communication of the Elastic product surface to users.

While it is also desirable and beneficial to align existing APIs with these design principles, this is very much recognised as a complex secondary concern, which can only happen gradually over a longer period of time.

All guidelines are just that: guidelines. These should not be read as hard rules, but as a set of best practices distilled from our collective experience. As such, deviation from these guidelines is acceptable, but must be accompanied by a solid reasoning for that deviation.

* [Naming](naming.md)
* [Data modelling](data-modelling.md)
* [Requests and responses](requests-responses.md)
