
# Conda Quick Reference

## Update Anaconda

ref: https://docs.anaconda.com/anaconda/install/update-version/

```python
#update the conda package manager to the latest version
conda update conda
#use conda to update Anaconda to the latest version
conda update anaconda
```

If `condat update conda` fails to update itself, try to specify a specific version of conda:

```python
conda install conda=23.3.1
```

The latest version number of conda can be found at https://docs.conda.io/projects/conda/en/stable/release-notes.html

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

# List all packages in an environment named 'py39'
conda list --name py39

# List all the packages whose names contain the substring 'cip', such as 'scipy'
conda list cip

# Intall the scipy package
conda install scipy

# Install the scipy package from the conda-forge channel
conda install -c conda-forge scipy

# Install the scipy package of specific version
conda install scipy==1.7.1

# Update the scipy package
conda update scipy

# Update the scipy package from the conda-forge channel
conda update -c conda-forge scipy
```

## See Also

* [[202207081024_pip_quick_ref]]