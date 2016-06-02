set COPY_PATH=C:\SDWORK\Workspaces\MobileDev\CMAApp\app\src\main\assets\www\
COPY .\appjs\*.js %COPY_PATH%appjs
COPY .\js\*.js %COPY_PATH%js
COPY .\css\*.* %COPY_PATH%css
COPY .\views\*.html %COPY_PATH%views
COPY .\fonts\*.* %COPY_PATH%fonts
COPY index.html %COPY_PATH%


