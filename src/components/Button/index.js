/*
 * @Author: your name
 * @Date: 2020-04-30 11:08:59
 * @LastEditTime: 2020-05-07 13:56:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /gm-design/src/components/Button/index.js
 */
import { Button } from 'antd';
import styles from './index.module.less'
import classnames from 'classnames';

const _BUtton = (props) => {
  return <div className={styles.button}>
    <Button {...props}>{props && props.children}</Button>
  </div>
}

export default _BUtton;
