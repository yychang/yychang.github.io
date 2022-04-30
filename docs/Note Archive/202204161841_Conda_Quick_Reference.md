---
tags:
  - quick-ref
---

# Conda Quick Rererence

## Environment

ref: https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html

```bash
# Create a new environment named py39 with python version 3.9
conda create -n py39 python=3.9

# Activate the environment py39
conda activate py39

# De-activate the environment
conda deactivate

# Remove an environment
conda remove -n py39 --all

# List the existing environments
conda env list
```

## Packages

```bash
# List all packages
conda list

# List all packages in an environment
conda list --name py39


# Intall the scipy package
conda install scipy

# Install the scipy package from the conda-forge channel
conda install -c conda-forge scipy

# Install the scipy package of specific version
conda install scipy==1.7.1
```