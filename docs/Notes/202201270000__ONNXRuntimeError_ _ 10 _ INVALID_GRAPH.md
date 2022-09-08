# \[ONNXRuntimeError\] : 10 : INVALID_GRAPH

## CONTEXT

When running a Python script with onnxruntime, the following error occurred:

```
Failed with exception '[ONNXRuntimeError] : 10 : INVALID_GRAPH : This is an invalid model. Error in Node:Transpose_0 : No Op registered for Transpose with domain_version of 12'
```

## PROBLEM

How to resolve the error

## SOLUTION

Update the onnxruntime package by running the following command:

```
pip install onnxruntime --upgrade
```

## NOTE

The error seems to indicate that the model is using some operators in the newer version of onnxruntime that is not supported by the installed version. Upgrading the onnxruntime on the local machine seems to resolve the problem.
