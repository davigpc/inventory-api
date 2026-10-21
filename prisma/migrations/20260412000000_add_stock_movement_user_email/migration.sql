-- Coluna desnormalizada usada pelo serviço de Estoque para preservar o e-mail
-- do usuário no histórico de movimentações quando a Identidade é separada.
ALTER TABLE "stock_movements" ADD COLUMN "user_email" TEXT;
