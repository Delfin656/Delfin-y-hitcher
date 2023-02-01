"""empty message

Revision ID: 7cc30624758f
Revises: 3ee204eca1fc
Create Date: 2023-02-01 01:46:48.733872

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7cc30624758f'
down_revision = '3ee204eca1fc'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('recipe', sa.Column('author_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'recipe', 'chef', ['author_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'recipe', type_='foreignkey')
    op.drop_column('recipe', 'author_id')
    # ### end Alembic commands ###
