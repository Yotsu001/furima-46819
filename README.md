## usersテーブル

|Column              |Type    |Options      |
|--------------------|--------|-------------|
| email              | string | null: false, unique: true |
| encrypted_password | string | null: false |
| nickname           | string | null: false |
| first_name         | string | null: false |
| last_name          | string | null: false |
| first_name_kana    | string | null: false |
| last_name_kana     | string | null: false |
| birth_date         | string | null: false |

### Association

- has_many :items
- has_many :purchases

## itemsテーブル

|Column         |Type        |Options      |
|---------------|------------|-------------|
| name          | string     | null: false |
| description   | text       | null: false |
| category      | string     | null: false |
| status        | string     | null: false |
| shipping_fee  | string     | null: false |
| prefecture    | string     | null: false |
| delivery_time | string     | null: false |
| price         | string     | null: false |
| user          | references | null: false, foreign_key: true|

### Association

- belongs_to :user
- has_one :purchase
- has_one :shipping_address

## purchasesテーブル

|Column |Type        |Options                        |
|-------|------------|-------------------------------|
| user  | references | null: false, foreign_key: true|
| item  | references | null: false, foreign_key: true|

### Association

- belongs_to :user
- belongs_to :item
- has_one :shipping_address


## shipping_addressesテーブル

|Column         |Type        |Options      |
|---------------|------------|-------------|
| post_code     | string     | null: false |
| prefecture    | string     | null: false |
| city          | string     | null: false |
| address       | string     | null: false |
| building_name | string     |             |
| phone_number  | string     | null: false |
| purchase      | references | null: false, foreign_key: true|

### Association

- belongs_to :item
- belongs_to :purchase
