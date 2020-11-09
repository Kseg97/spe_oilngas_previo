%Seleccionar sólo los 12 meses de todos los campos
% uiopen('C:\Users\gol10.2015\Documents\Producción Fiscalizada Crudo 2017.xlsx',1) %Encriptado
% uiopen('C:\Users\gol10.2015\Documents\Produccion-fiscalizada-crudo-2017.xlsx',1) %Directo

sb = size(P2017blind);
sd = size(P2017str);

D = pdist2(P2017blind,P2017str); %para hallar las distancias de todos contra todos
k = min(D'); % Se encuentran las distancias mínimas para cada conjunto de datos encriptado
for i = 1:sb(1)
    ind(i) = find(D(i,:)==k(i)); % Se bubscan los índices de estos en los datos directos/completos para identificar las variables
end
%Para buscar en el Excel de las estadísticas directas
enExcel = ind+8; %Se busca la fila del excel que está corrida 8 unidades

        