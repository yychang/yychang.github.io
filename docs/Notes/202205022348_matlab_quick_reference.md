# Matlab Quick Reference
## Using `waitbar`

```matlab
h = waitbar(0,'');
set(findall(h,'type','text'),'Interpreter','none');
for n=1:10
    waitbar(n/10, h, sprintf(Progress: %d/10,n) );
end
close(h)
```

## Plot a data like a heat map

Use [imagesc](http://www.mathworks.com/help/matlab/ref/imagesc.html):

```matlab
data = load('some_csv_file.csv');
imagesc(data);
colorbar;        % Add a colorbar to the plot
colormap('jet'); % Change the color map to "jet" type
caxis([-5 -2]);  % Set the range of values mapped by the colormap.
axis xy;         % change the direction of y-axis
```

## Print the current figure to file

```matlab
isOctave = exist('OCTAVE_VERSION', 'builtin') ~= 0;
figHandle = gcf;
if(isOctave)
  print( sprintf('-f%d', figHandle.Number), '-djpg', print_fpath,  '-S800,600' );
else
  figHandle.PaperUnits = 'points';
  figHandle.PaperPosition = [0,0, figHandle.Position(3:4)]*3/4;
  figHandle.PaperSize = figHandle.Position(3:4)*3/4;
  figHandle.PaperPositionMode = 'manual';
  print( sprintf('-f%d', figHandle.Number), '-djpeg90', '-r0', print_fpath);
end
```

The flag `-r0` sets the resolution to be the screen resolution. And configuring `PaperPosition` and `PaperSize` based on `Position` allows the output image size to be consistent with the image shown on the screen (here the `figHandle.Units` is assumed to be `Pixels` by default). A magic scaling factor of 3/4 is required in order to print an N-pixel image on screen to an N-pixel image in file. Whether this scaling factor is related to the screen resolution (after setting the `-r0` flag) is to be investigated.

## Link all X axis

```matlab
figHandles = findobj('Type','figure');
hall = findall(figHandles,'type','axes','tag','');
linkaxes(hall, 'x');
```

Use the criteria of empty `'tag'` to filter out the axis handles that are the legends.

## Set yscale to log in a Histogram Plot

```matlab
axHandle = gca;

% A code snippet from MathWork to make the plot work with logscale on
% Y-axis
ph = get(axHandle,'children');
% Determine number of histogram patches
N_patches = length(ph);
for i = 1:N_patches
    % Get patch vertices
    vn = get(ph(i),'Vertices');
    % Adjust y location
    vn(:,2) = vn(:,2) + 1;
    % Reset data
    set(ph(i),'Vertices',vn)
end
set(axHandle,'yscale','log')
```

## Create a Circulant Matrix from a Vector

To create a circulant matrix like the following:

$$
\left[
\begin{array}{ccccc}
  1  &  16 & 8  &  4  &  2  \\
  2  &  1  & 16 &  8  &  4  \\
  4  &  2  & 1  & 16  &  8  \\  
  8  &  4  & 2  &  1  & 16  \\
  16 &  8  & 4  &  2  &  1  
\end{array}  
\right]
$$

Run

```matlab
x = [1 2 4  8 16];
a = gallery('circul', x);
```

Note: if `x` is an array, `gallery()` will first convert it to a vector (equivalent to `x(:)`).

## Running from Perl and Keeping Perl Waiting until Matlab is done

```matlab
system("matlab -nodisplay -nosplash -nodesktop -wait -r \"run myscript; exit\"");
```

Without the flags of `-nodisplay -nosplash -nodesktop -wait`, Perl runs Matlab in a forked process and will not wait for Matlab to finish its run.

## Reference

* [List of matrices](https://en.wikipedia.org/wiki/List_of_named_matrices) 