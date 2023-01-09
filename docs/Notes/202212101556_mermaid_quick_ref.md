# Mermaid Sequence Diagram Quick Ref

## Basic

The basic syntax is 

```
[Actor][Arrow][Actor]:[Description text]
```

```mermaid
sequenceDiagram
  A ->> B : Hi A
  B ->> A : Hi B

  participant C
  actor D
  participant E as Ethan
  E ->> A : Hi A
```

## Activation 

Activate or deactivate an actor by adding `+` or `-` after the `[Arrow]`, respectively

```mermaid
sequenceDiagram
  A ->>+ B : Call B
  A ->>+ B : Call B again
  B ->>- A : Return the 2nd call
  B ->>- A : Return the 1st call
```

List of the available arrow types:

```
->
-->
->>
-->>
-x
--x
-)
--)
```

Notes and background highlighting

```mermaid
sequenceDiagram
  note left of A : A is going to call B
  A ->> B : Call B
  note over A, B: A calling B
  note right of B: B getting a call from A

  rect rgb(255, 0, 0)
  note right of A : A calls B
  A ->> B : Call B
  rect rgb(0, 255, 0)
  note over A, B: Processing
  end
  B ->> A : Return
  end
```

