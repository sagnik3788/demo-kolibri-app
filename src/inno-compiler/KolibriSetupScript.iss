#define MyAppName "Kolibri"
#define MyAppPublisher "Foundation for Learning Equality"
#define MyAppURL "https://learningequality.org/kolibri"
#define MyAppSupportURL "https://community.learningequality.org/c/support/kolibri"
#define MyDocsURL "https://kolibri.readthedocs.io"
#define MyAppExeName "Kolibri-0.16.0.exe"
#define TargetVersion =  GetEnv("KOLIBRI_BUILD_VERSION")
#expr DeleteFile(SourcePath+"\version.temp") 

[Setup]
AppId={#MyAppName}-{#MyAppPublisher}
AppName={#MyAppName}
AppVersion=0.16.0;
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={autopf}\{#MyAppName}
DefaultGroupName={#MyAppName}
OutputDir=..\..\exe
OutputBaseFilename=kolibri-{#TargetVersion}-windows-setup-unsigned
SetupIconFile=..\gui-packed\images\logo48.ico
Compression=lzma
SolidCompression=yes
PrivilegesRequired=admin
UsePreviousAppDir=yes
ChangesEnvironment=yes
SetupLogging=yes
UsedUserAreasWarning=no
ShowLanguageDialog=yes

[Languages]
Name: "en"; MessagesFile: "compiler:Default.isl"
Name: "vi"; MessagesFile: "compiler:Languages\Vietnamese.isl" 
Name: "sw_TZ"; MessagesFile: "compiler:Languages\Swahili_Tanzania.isl" 
Name: "km"; MessagesFile: "compiler:Languages\Khmer.isl" 
Name: "es_ES"; MessagesFile: "compiler:Languages\Spanish.isl" 
Name: "mr"; MessagesFile: "compiler:Languages\Marathi.isl" 
Name: "fv"; MessagesFile: "compiler:Languages\Fulfulde_Mbororoore.isl" 
Name: "it"; MessagesFile: "compiler:Languages\Italian.isl" 
Name: "te"; MessagesFile: "compiler:Languages\Telugu.isl" 
Name: "tl"; MessagesFile: "compiler:Languages\Tagalog.isl" 
Name: "gu_IN"; MessagesFile: "compiler:Languages\Gujarati.isl" 
Name: "yo"; MessagesFile: "compiler:Languages\Yoruba.isl" 
Name: "zh_CN"; MessagesFile: "compiler:Languages\Chinese_Simplified.isl" 
Name: "my"; MessagesFile: "compiler:Languages\Burmese.isl" 
Name: "ar"; MessagesFile: "compiler:Languages\Arabic.isl" 
Name: "pt_BR"; MessagesFile: "compiler:Languages\Portuguese_Brazilian.isl" 
Name: "bg"; MessagesFile: "compiler:Languages\Bulgarian.isl" 
Name: "bn"; MessagesFile: "compiler:Languages\Bengali.isl" 
Name: "hi"; MessagesFile: "compiler:Languages\Hindi.isl" 
Name: "ka"; MessagesFile: "compiler:Languages\Georgian.isl" 
Name: "de"; MessagesFile: "compiler:Languages\German.isl" 
Name: "ny"; MessagesFile: "compiler:Languages\Chewa.isl" 
Name: "ko"; MessagesFile: "compiler:Languages\Korean.isl" 
Name: "fr"; MessagesFile: "compiler:Languages\French.isl" 
Name: "fa"; MessagesFile: "compiler:Languages\Persian.isl" 
Name: "la"; MessagesFile: "compiler:Languages\Spanish_Latin_America.isl" 
Name: "ne_NP"; MessagesFile: "compiler:Languages\Nepali.isl" 
Name: "ur_PK"; MessagesFile: "compiler:Languages\Urdu_(Pakistan).isl" 
Name: "tr"; MessagesFile: "compiler:Languages\Turkish.isl"


[Files]
//Source: "..\kolibri*.whl"; DestDir: "{app}\kolibri"
Source: "..\scripts\reset-env-vars.bat"; DestDir: "{app}\scripts"; Flags: ignoreversion
Source: "..\scripts\*.bat"; DestDir: "{app}\kolibri\scripts\"
Source: "..\Kolibri-0.16.0\Kolibri-0.16.0.exe"; DestDir: "{app}"; Flags: ignoreversion    
Source: "..\gui-packed\guitools.vbs"; DestDir: "{app}"; Flags: ignoreversion
Source: "..\gui-packed\images\logo48.ico"; DestDir: "{app}\images"; Flags: ignoreversion
Source: "..\gui-packed\icon\logo48.ico"; DestDir: "{app}\icon"; Flags: ignoreversion
Source: "..\python-setup\*"; DestDir: "{app}\python-setup"; Flags: ignoreversion
Source: "..\inno-compiler\SecurityAndMaintenance_Error.bmp"; DestDir: "{app}";

[Icons]
Name: "{group}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; IconFilename: "{app}\images\logo48.ico"
Name: "{group}\{cm:KolibriHomePage,{#MyAppName}}"; Filename: "{#MyAppURL}"
Name: "{group}\{cm:KolibriDocs}"; Filename: "{#MyDocsURL}"
Name: "{group}\{cm:KolibriSupportLink}"; Filename: "{#MyAppSupportURL}"
Name: "{group}\{cm:UninstallProgram,{#MyAppName}}"; Filename: "{uninstallexe}"; Parameters: "/LOG={commondesktop}\kolibri-uninstall.log";
Name: "{commondesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; IconFilename: "{app}\icon\logo48.ico"

[Dirs]
Name: "{app}\"; Permissions: everyone-readexec

[Run]
Filename: "{cmd}"; Parameters: "/k ""{app}\scripts\reset-env-vars.bat"" && ""{app}\Kolibri-0.16.0.exe"""; Description: "{cm:LaunchKolibri}"; Flags: nowait runhidden postinstall skipifsilent;

[InstallDelete]
Type: Files; Name: "{app}\*"

[UninstallDelete]
Type: filesandordirs; Name: "{app}\kolibri*"
Type: files; Name: "{userstartup}\Kolibri.lnk"
Type: files; Name: "{app}\CONFIG.dat"

[UninstallRun]
Filename: {app}\kolibri\scripts\uninstall-kolibri.bat; Parameters: ""; Flags: runhidden;

[Code]

function GetHKLM: Integer;
begin
  if IsWin64 then
    Result := HKLM64
  else
    Result := HKLM32;
end;

function GetPreviousVersion : String; Forward;

var
  installFlag : boolean;
  startupFlag : string;
  isUpgrade : boolean;
  stopServerCode: integer;
  removeOldGuiTool: integer;
  uninstallError: integer;
  cleanOldKolibriFolder : integer;
  forceCancel : boolean;
  isWindowsInstall : boolean;

function OpenLogFile():string;
var
  logfilepathname: string;
  logfilename: string;
  newfilepathname: string;
begin
    logfilepathname := ExpandConstant('{log}');
    logfilename := ExtractFileName(logfilepathname);
    RenameFile(logfilename,'Kolibri-setup.log');
    newfilepathname := ExpandConstant('{%HOMEPATH}') + '\Desktop\Kolibri-setup.log';

    if FileExists(newfilepathname) then DeleteFile(newfilepathname);

    filecopy(logfilepathname, newfilepathname, false);
end;

procedure URLLabelOnClick(Sender: TObject);
var
  errorCode: Integer;
begin
  ShellExecAsOriginalUser('open', CustomMessage('CommunityLink'), '', '', SW_SHOWNORMAL, ewNoWait, errorCode);
end;

procedure FileLabelOnClick(Sender: TObject);
var
  errorCode: Integer;
begin
  ShellExecAsOriginalUser('open',  ExpandConstant('{sd}' + '{%HOMEPATH}') + '\Desktop\Kolibri-setup.log', '', '', SW_SHOWNORMAL, ewNoWait, errorCode);
end;

{Customize message box}
function CustomizeMsgbox(msgErr: string):integer;
var
  form: TSetupForm;
  okButton: TNewButton;
  failToInstall: TLabel;
  logPath: TLabel;
  needHelp: TLabel;
  forumsLink: TLabel;
  errDetails: TLabel;
  memoErrMsg: TNewMemo;
  bitmapImage: TBitmapImage;
  bitmapFileName : string;

begin
  form := CreateCustomForm;
  with form do
    begin
        BorderStyle := bsDialog;
        Position := poScreenCenter;
        ClientWidth := ScaleX(380);
        ClientHeight := ScaleY(240);
        Caption := 'Setup Error';
        Color := clWindow;
        ParentBackground := False;
    end;
  
  failToInstall := TLabel.Create(Form);
  with failToInstall do
    begin
        Parent := Form;
        Left := ScaleX(70);
        Top := ScaleX(16);
        Width := Form.ClientWidth - 2*ScaleX(130);
        Height := ScaleY(150);
        AutoSize := True;
        WordWrap := false;
        Caption := CustomMessage('KolibriInstallFailed');
        Font.Size := 8;
    end;
  Log(CustomMessage('KolibriInstallFailed'));
  
  logPath := TLabel.Create(Form);
  with logPath do
    begin
        Parent := Form;
        Left := ScaleX(70);
        Top := ScaleX(45);
        Width := Form.ClientWidth - 2*ScaleX(130);
        Height := ScaleY(170);
        AutoSize := True;
        WordWrap := false;
        Caption := ExpandConstant('{sd}' + '{%HOMEPATH}') + '\Desktop\Kolibri-setup.log';
        Cursor := crHand;
        OnClick := @FileLabelOnClick;
        Font.Style := LogPath.Font.Style + [fsUnderline];
        Font.Color := clHotLight
        Font.Size := 8;
    end;
  Log(ExpandConstant('{sd}' + '{%HOMEPATH}') + '\Desktop\Kolibri-setup.log');
  
  needHelp := TLabel.Create(Form);
  with needHelp do
    begin
        Parent := Form;
        Left := ScaleX(70);
        Top := ScaleX(72);
        Width := Form.ClientWidth - 2*ScaleX(130);
        Height := ScaleY(150);
        AutoSize := True;
        WordWrap := false;
        Caption := CustomMessage('Needhelp');
        Font.Size := 8;  
    end;
  Log(CustomMessage('Needhelp'));

  forumsLink := TLabel.Create(Form);
  with forumsLink do
    begin
        Parent := Form;
        Left := ScaleX(70);
        Top := ScaleX(89);
        Width := Form.ClientWidth - 2*ScaleX(130);
        Height := ScaleY(150);
        AutoSize := True;
        WordWrap := false;
        Caption := CustomMessage('CommunityLink');
        Cursor := crHand;
        OnClick := @URLLabelOnClick;
        Font.Style := ForumsLink.Font.Style + [fsUnderline];
        Font.Color := clHotLight
        Font.Size := 8;
    end;
  Log(CustomMessage('CommunityLink'));

  errDetails := TLabel.Create(Form);
  with errDetails do
    begin
        Parent := Form;
        Left := ScaleX(70);
        Top := ScaleX(118);
        Width := Form.ClientWidth - 2*ScaleX(130);
        Height := ScaleY(150);
        AutoSize := True;
        WordWrap := false;
        Caption := 'Error details:';
        Font.Size := 8;
    end;
  Log('Error details:');

  memoErrMsg := TNewMemo.Create(Form);
  with memoErrMsg do
    begin
        Left := ScaleX(70);
        Top := ScaleX(136);
        Width := Form.ClientWidth - ScaleX(90);
        Height := ScaleY(60); 
        ScrollBars := ssVertical;
        Text := msgErr;
        ReadOnly := True;
        WordWrap := True;
        Parent := Form;
    end;
  Log(msgErr);
  
  okButton := TNewButton.Create(Form);
  with okButton do
    begin
        Parent := Form;
        Width := ScaleX(80);
        Height := ScaleY(24);
        Left :=Form.ClientWidth - 2*ScaleX(48);
        Top := Form.ClientHeight - OkButton.Height - ScaleY(8);
        Caption := '&Ok';
        ModalResult := mrOk;
    end;

  // TODO(cpauya): We extract to {tmp} dir, instead of {app}, coz sometimes setup hasn't extracted the
  // files to their destination folders yet (some dest are to the {app} folder) when an exception occurs.
  // (example: missing python-3.4.3.amd64.msi)
  ExtractTemporaryFile('SecurityAndMaintenance_Error.bmp');
  bitmapFileName := ExpandConstant('{tmp}\SecurityAndMaintenance_Error.bmp');
  
  bitmapImage := TBitmapImage.Create(Form);
  with bitmapImage do
    begin
        Parent := Form;
        Bitmap.LoadFromFile(bitmapFileName);
        Stretch := True;
        Left :=ScaleX(20);
         Top := ScaleX(12);
         Width := ScaleX(41);
        Height := ScaleY(41); 
    end;

  OpenLogFile();
  result := Form.ShowModal;
end;

{REF: http://stackoverflow.com/questions/4438506/exit-from-inno-setup-instalation-from-code}
procedure ExitProcess(uExitCode: Integer);
  external 'ExitProcess@kernel32.dll stdcall';

procedure InitializeWizard;
begin
    isUpgrade := False;
    forceCancel := False;

    if WizardForm <> nil then
    begin
        try
            ShellExec('open', 'taskkill.exe', '/F /T /im "Kolibri-0.16.0.exe"', '', SW_HIDE, ewWaitUntilTerminated, stopServerCode);
            ShellExec('open', 'tskill.exe', '"Kolibri"', '', SW_HIDE, ewWaitUntilTerminated, stopServerCode);
            Exec(ExpandConstant('{cmd}'),'/C del winshortcut.vbs', WizardForm.PrevAppDir, SW_HIDE, ewWaitUntilTerminated, removeOldGuiTool);
        except
            // MsgBox('InitializeWizard - ' + GetExceptionMessage, mbInformation, mb_Ok);
            // Log('Exception: ' + GetExceptionMessage);
            CustomizeMsgbox(AddPeriod(GetExceptionMessage));
            ExitProcess(1);
        end;    
    end;
end;

procedure CancelButtonClick(CurPageID: Integer; var Cancel, Confirm: Boolean);
begin
  if forceCancel = True then
  begin
    Confirm := False;
  end;
end;

function ShouldSkipPage(PageID: Integer): Boolean;
begin
    result := False;
    if isUpgrade = True then
    begin
        if PageID = wpSelectDir then
        begin
            result := True;
        end;
    end;
end;

procedure RemoveOldInstallation(targetPath : String);
begin
    WizardForm.Hide;
    if Not Exec(ExpandConstant('{cmd}'),'/C ( dir /b "unins***.exe" | findstr /r "unins[0-9][0-9][0-9].exe" ) > tempu & ( for /f "delims=" %A in ( tempu ) do call %A /SILENT /SUPPRESSMSGBOXES ) & del tempu', targetPath, SW_HIDE, ewWaitUntilTerminated, uninstallError) then
    begin
        Exec(ExpandConstant('{cmd}'),'/C cd .. & del /q "'+targetPath+'\*" & for /d %x in ( "'+targetPath+'\*" ) do @rd /s /q "%x"', targetPath, SW_HIDE, ewWaitUntilTerminated, cleanOldKolibriFolder);
    end;
    WizardForm.Show;
end;

{ Get the previous version number by checking the uninstall key registry values. }
{ IS writes quite a bit of information to the registry by default: https://github.com/jrsoftware/issrc/blob/5203240a7de9b83c5432bee0b5b09d467869a02b/Projects/Install.pas#L434 }
function GetPreviousVersion() : String;
var
    subkey : String;
begin
    subkey := 'Software\Microsoft\Windows\CurrentVersion\Uninstall\Kolibri-Foundation for Learning Equality_is1';
    result := '';
    { 32-bit programs have a virtualized registry on 64-bit windows. So check all possible root keys. }
    if Not RegQueryStringValue(HKLM, subkey, 'DisplayVersion', result) then
    begin
        if Not RegQueryStringValue(HKCU, subkey, 'DisplayVersion', result) then
        begin
            if IsWin64 then
            begin
                if Not RegQueryStringValue(HKLM64, subkey, 'DisplayVersion', result) then
                begin
                    if Not RegQueryStringValue(HKCU64, subkey, 'DisplayVersion', result) then
                    begin
                        { Couldn't determine the previous version, so result is '' }
                    end;
                end;
            end;
        end;
    end;
end;

procedure ConfirmUpgradeDialog();
begin
    if MsgBox(CustomMessage('UpgradeMsg'), mbInformation,  MB_YESNO or MB_DEFBUTTON1) = IDYES then
    begin
        isUpgrade := True;
    end
    else if MsgBox(CustomMessage('UpgradeDelMsg'), mbInformation,  MB_YESNO or MB_DEFBUTTON2) = IDYES then
    begin
        isUpgrade := False;
    end
    else
    begin
        isUpgrade := True;
    end;
end;

{REF: https://stackoverflow.com/questions/37825650/compare-version-strings-in-inno-setup}
function CompareVersion(V1, V2: string): Integer;
var
  P, N1, N2: Integer;
begin
  result := 0;
  while (result = 0) and ((V1 <> '') or (V2 <> '')) do
  begin
    P := Pos('.', V1);
    if P > 0 then
    begin
      N1 := StrToInt(Copy(V1, 1, P - 1));
      Delete(V1, 1, P);
    end
      else
    if V1 <> '' then
    begin
      N1 := StrToInt(V1);
      V1 := '';
    end
      else
    begin
      N1 := 0;
    end;

    P := Pos('.', V2);
    if P > 0 then
    begin
      N2 := StrToInt(Copy(V2, 1, P - 1));
      Delete(V2, 1, P);
    end
      else
    if V2 <> '' then
    begin
      N2 := StrToInt(V2);
      V2 := '';
    end
      else
    begin
      N2 := 0;
    end;

    if N1 < N2 then result := -1
      else
    if N1 > N2 then result := 1;
  end;
end;

procedure HandleUpgrade(targetPath : String);
var
    prevVerStr : String;
begin
    prevVerStr := GetPreviousVersion();
    if (CompareVersion('{#TargetVersion}', prevVerStr) >= 0) and not (prevVerStr = '') then
    begin   
        ConfirmUpgradeDialog();
        { forceCancel will be true if something went awry in DoGitMigrate... abort instead of trampling the user's data. }
        if Not forceCancel then
        begin
            RemoveOldInstallation(targetPath);
        end;
    end;  
end;

{ Commented out Python-related functions and logic since PyInstaller bundles Python. }

{function GetPythonPathFromRegistry(): string;
var
  PythonCoreKey: string;
  PythonVersion: string;
  MaxSupportedVersion: integer;
  MinSupportedVersion: integer;
  Version: integer;
  PythonPath: string;
  PythonExists: boolean;

begin
  // Check if Python is installed
  PythonCoreKey := 'SOFTWARE\Python\PythonCore\';
  MinSupportedVersion:=6;
  MaxSupportedVersion:=11;
  PythonPath:= '';
  PythonExists := False;

  for Version := MinSupportedVersion to MaxSupportedVersion do
    begin
      PythonVersion := '3.' + IntToStr(Version);
      if not IsWin64 then PythonVersion := PythonVersion + '-32';

      // This checks for Python 3.x installed for all users
      if  RegKeyExists(GetHKLM, 'SOFTWARE\Python\PythonCore\' + PythonVersion + '\InstallPath' ) then
        begin
          PythonExists := True;
          RegQueryStringValue( GetHKLM, 'SOFTWARE\Python\PythonCore\' + PythonVersion + '\InstallPath', '', PythonPath);
          Break;
        end;
      if RegKeyExists(HKEY_CURRENT_USER, 'SOFTWARE\Python\PythonCore\' + PythonVersion + '\InstallPath') then
      // This checks for Python 3.x installed for the current user only
        begin
          PythonExists := True;
          RegQueryStringValue(HKEY_CURRENT_USER, 'SOFTWARE\Python\PythonCore\' + PythonVersion + '\InstallPath', '', PythonPath);
          Break;
        end;
    end;

    if not PythonExists then PythonPath:='';
 Result:= PythonPath;
end;}



function NextButtonClick(CurPageID: Integer): Boolean;
begin
    result := True;
    isWindowsInstall := true;
    {if GetPythonPathFromRegistry() = '' then
    begin
        HandlePythonSetup();
    end;}
    if CurPageID = wpSelectTasks then
    begin
        if WizardForm <> nil then 
            HandleUpgrade(WizardForm.PrevAppDir);
    end;

    if CurPageID = wpSelectDir then
    begin
        { Unclear what the logic here is. This is only executed if HandleUpgrade was not previously run. }
        if Not isUpgrade then  
            HandleUpgrade(ExpandConstant('{app}'));
    end;
end;

{ Commented out Pip-related functions and logic since PyInstaller bundles Python. }


 


{REF: https://stackoverflow.com/questions/3304463/how-do-i-modify-the-path-environment-variable-when-running-an-inno-setup-install}
function EnvAddPath(param: string): boolean;
var
  Paths: string;
begin
  { Retrieve current path (use empty string if entry not exists) }
    if not RegQueryStringValue(HKEY_LOCAL_MACHINE, 'System\CurrentControlSet\Control\Session Manager\Environment', 'Path', Paths)
    then Paths := '';

    { Skip if string already found in path }
    if Pos(';' + Uppercase(param) + ';', ';' + Uppercase(Paths) + ';') > 0 then exit;

    { App string to the end of the path variable }
    Paths := '%KOLIBRI_SCRIPT_DIR%' + ';' + Paths + ';'

    { Overwrite (or create if missing) path environment variable }
    if RegWriteStringValue(HKEY_LOCAL_MACHINE, 'System\CurrentControlSet\Control\Session Manager\Environment', 'Path', Paths)
    then Log(Format('The [%s] added to PATH: [%s]', [param, Paths]))
    else Log(Format('Error while adding the [%s] to PATH: [%s]', [param, Paths]));
end;

{ Commented out Pip setup logic since PyInstaller bundles Python. }

function InitializeSetup(): Boolean;
var
  PythonVersionCodeCheck: integer;
  killErrorCode: integer;
  PythonPath: string;
begin
    installFlag:=true;
    result := true;
    startupFlag:=''; 
  
    ShellExec('open', 'taskkill.exe', '/F /T /im "Kolibri-0.16.0.exe"', '', SW_HIDE, ewWaitUntilTerminated, killErrorCode)
    ShellExec('open', 'tskill.exe', ' "Kolibri"', '', SW_HIDE, ewWaitUntilTerminated, killErrorCode);

    RegDeleteValue(HKCU, 'SOFTWARE\Microsoft\Windows\CurrentVersion\Run', ExpandConstant('{#MyAppName}'));

end;

function InitializeUninstall(): Boolean;
var
ErrorCode: Integer;
begin 
  ShellExec('open', 'taskkill.exe', '/F /T /im "Kolibri-0.16.0.exe"', '', SW_HIDE, ewWaitUntilTerminated, ErrorCode);
  ShellExec('open', 'tskill.exe', '"Kolibri"', '', SW_HIDE, ewWaitUntilTerminated, ErrorCode);
  result := True;                          
end;

procedure CurStepChanged(CurStep: TSetupStep);
var
  informationBoxFlagged: boolean;
begin                                                                   
    RegWriteStringValue(
      HKLM,
      'System\CurrentControlSet\Control\Session Manager\Environment',
      'KOLIBRI_GUI_LANG',
      ExpandConstant('{language}')
    );
    if CurStep = ssInstall then
    begin
        informationBoxFlagged :=False;
        
        ShellExec('open', 'taskkill.exe', '/F /T /im "Kolibri-0.16.0.exe"', '', SW_HIDE, ewWaitUntilTerminated, stopServerCode);
        ShellExec('open', 'tskill.exe', '"Kolibri"', '', SW_HIDE, ewWaitUntilTerminated, stopServerCode);
        Exec(ExpandConstant('{cmd}'),'/C del winshortcut.vbs', ExpandConstant('{app}'), SW_HIDE, ewWaitUntilTerminated, removeOldGuiTool);  
    end;

    if CurStep = ssPostInstall then
    begin
        if installFlag then
        begin
          Exec(
    ExpandConstant('{cmd}'), 
    '/S /C " ' + 'setx KOLIBRI_SETUP ' + ExtractFileName(ExpandConstant('{srcexe}')) + ' && ' + ExpandConstant('{app}\scripts') + '\reset-env-vars.bat' + '"', 
    ExpandConstant('{app}'), 
    SW_HIDE, 
    ewWaitUntilTerminated, 
    stopServerCode
);
            {HandlePipSetup();}
            if Not forceCancel then
        end;
    end;
end;

{ Called just prior to uninstall finishing. }
{ Clean up things we did during uninstall: }
{   uninstallers of those versions }
procedure DeinitializeUninstall();
begin
    RegDeleteValue(
        HKLM,
        'System\CurrentControlSet\Control\Session Manager\Environment',
        'KOLIBRI_SCRIPT_DIR'
    )
    { Use this environment varaible to get the selected language for the kolibri GUI application. }
    RegDeleteValue(
        HKLM,
        'System\CurrentControlSet\Control\Session Manager\Environment',
        'KOLIBRI_GUI_LANG'
    )
    { Delete system KOLIBRI_INSTALLATION_TYPE environment variable }
    RegDeleteValue(
        HKLM,
        'System\CurrentControlSet\Control\Session Manager\Environment',
        'KOLIBRI_INSTALLATION_TYPE'
    )
    { Delete system KOLIBRI_INSTALLER_VERSION environment variable }
    RegDeleteValue(
        HKLM,
        'System\CurrentControlSet\Control\Session Manager\Environment',
        'KOLIBRI_INSTALLER_VERSION'
    )
end;

procedure CurUninstallStepChanged(CurUninstallStep: TUninstallStep);
var
  kolibriHomePath: String;
  kolibriHomeEnv: String;
  msg: String;
begin
  case CurUninstallStep of usUninstall:
    if not isWindowsInstall then
    begin
      kolibriHomeEnv := GetEnv('KOLIBRI_HOME');
      kolibriHomePath :=  GetEnv('USERPROFILE') + '\.kolibri';
      if DirExists(ExtractFileDir(kolibriHomeEnv)) then
      begin
        kolibriHomePath := kolibriHomeEnv
      end;
      if DirExists(kolibriHomePath) then
      begin
        { We do multiple lines to prepare for customization of the message later. }
        msg := CustomMessage('UninstallKolibriDataLine1') + #13#10 + #13#10;
        msg := msg + CustomMessage('UninstallKolibriDataLine2') + #13#10 + #13#10;
        msg := msg + CustomMessage('UninstallKolibriDataLine3') + #13#10 + #13#10;
        msg := msg + CustomMessage('UninstallKolibriPath') + ' ' + kolibriHomePath;
        if(MsgBox(msg, mbConfirmation, MB_YESNO or MB_DEFBUTTON2) = IDYES) then
        begin
          DelTree(kolibriHomePath, True, True, True);
        end;
      end;
    end;
  end;
end;