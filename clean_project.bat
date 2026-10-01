@echo off
REM ============================================
REM Script para limpar projeto React + Vite
REM Remove dependências, arquivos de build e gera ZIP
REM ============================================

echo Limpando projeto...

REM Remover node_modules
rmdir /s /q node_modules

REM Remover arquivos de lock
del /f /q package-lock.json
del /f /q yarn.lock

REM Remover pasta de build (dist)
rmdir /s /q dist

REM Remover arquivo ZIP existente, se houver
if exist projeto-secretarias.zip del /f /q projeto-secretarias.zip

REM Criar arquivo compactado .zip
echo Compactando projeto...
powershell -command "Compress-Archive -Path * -DestinationPath projeto-secretarias.zip"

echo Projeto limpo e compactado com sucesso!
pause
