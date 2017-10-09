/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5_1705

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-10-09 20:04:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for buycar
-- ----------------------------
DROP TABLE IF EXISTS `buycar`;
CREATE TABLE `buycar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `miaoshu` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `nowprice` varchar(255) DEFAULT NULL,
  `lastprice` varchar(255) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of buycar
-- ----------------------------
INSERT INTO `buycar` VALUES ('1', '\n             [保税仓直送]SK-II  R.N.A. POWER 肌源赋活(2.5克)\n          ', '../img/img3/xiao1.jpg', '￥32.0', '市场价￥49.0', '1');

-- ----------------------------
-- Table structure for listpage
-- ----------------------------
DROP TABLE IF EXISTS `listpage`;
CREATE TABLE `listpage` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `huodong` varchar(255) DEFAULT NULL COMMENT '活动形式',
  `gurl` varchar(255) DEFAULT NULL,
  `guojia` varchar(255) DEFAULT NULL COMMENT '出自那个国家',
  `imgurl` varchar(255) DEFAULT NULL COMMENT '图片路径',
  `imgurl1` varchar(255) DEFAULT NULL,
  `imgurl2` varchar(255) DEFAULT NULL,
  `imgurl3` varchar(255) DEFAULT NULL,
  `yuan` varchar(255) DEFAULT NULL COMMENT '人名币符号',
  `price` decimal(10,2) DEFAULT NULL COMMENT '目前的价格',
  `last_price` decimal(10,2) DEFAULT NULL COMMENT '历史价格',
  `zhekou` varchar(255) DEFAULT NULL COMMENT '打的折扣',
  `mingzi` varchar(255) DEFAULT NULL COMMENT '商品名字',
  `descrition` varchar(255) DEFAULT NULL COMMENT '商品描述',
  `daxiao` varchar(255) DEFAULT NULL COMMENT '商品容量大小',
  `qty` varchar(255) DEFAULT NULL COMMENT '商品已卖出的数量',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of listpage
-- ----------------------------
INSERT INTO `listpage` VALUES ('1', '直降商品', '../img/img2/hanguo.png', '韩国品牌', '../img/img2/f1.jpg', '../img/img2/f1_1.jpg', '../img/img2/f2_2.jpg', '../img/img2/f1_3.jpg', '￥', '102.00', '168.00', '6.1折', 'JayJun', '补水保湿三部曲水光面膜', '10片', null);
INSERT INTO `listpage` VALUES ('2', '限时特卖', '../img/img2/riben.png', '日本品牌', '../img/img2/f2.jpg', '../img/img2/f2_1.jpg', '../img/img2/f2_2.jpg', '../img/img2/f2_3.jpg', '￥', '759.00', '1260.00', '6折', 'SK-II', '紧肤抗皱修复系列   肌源赋活', '80克  ', '已售4件');
INSERT INTO `listpage` VALUES ('3', '限时特卖', '../img/img2/riben.png', '日本品牌', '../img/img2/f3.jpg', '../img/img2/f3_1.jpg', '../img/img2/f3_2.jpg', '../img/img2/f3_3.jpg', '￥', '760.00', '1510.00', '7折', '悦木之源', '韦博士灵芝焕能系列   灵芝焕能精华水', '200毫升  ', '已售3件');
INSERT INTO `listpage` VALUES ('4', '直降商品', '../img/img2/oumei.png', '欧美品牌', '../img/img2/f4.jpg', '../img/img2/f4_1.jpg', '../img/img2/f4_2.jpg', '../img/img2/f4_3.jpg', '￥', '76.00', '140.00', '5折', '雅诗兰黛', 'ANR修护系列   特润修护肌透精华露(小棕瓶) 第六代 小样', '7毫升', '');
INSERT INTO `listpage` VALUES ('5', '限时特卖', '../img/img2/hanguo.png', '韩国品牌', '../img/img2/f5.jpg', '../img/img2/f5_1.jpg', '../img/img2/f5_2.jpg', '../img/img2/f5_3.jpg', '￥', '50.00', '100.00', '5折', '悦木之源', '补水保湿三部曲水光面膜', '80克  ', '已售3件');
INSERT INTO `listpage` VALUES ('6', '限时特卖', '../img/img2/hanguo.png', '韩国品牌', '../img/img2/f6.jpg', '../img/img2/f6_1.jpg', '../img/img2/f6_2.jpg', '../img/img2/f6_3.jpg', '￥', '400.00', '1200.00', '5折', '雅诗兰黛', '紧肤抗皱修复系列   肌源赋活修护精华霜', '80克  ', '已售3件');
INSERT INTO `listpage` VALUES ('7', '限时特卖', '../img/img2/hanguo.png', '韩国品牌', '../img/img2/f7.jpg', '../img/img2/f7_1.jpg', '../img/img2/f7_2.jpg', '../img/img2/f7_3.jpg', '￥', '600.00', '4702.00', '5折', '雅诗兰黛', '紧肤抗皱修复系列   肌源赋活修护精华霜', '80克  ', '已售3件');
INSERT INTO `listpage` VALUES ('8', '限时特卖', '../img/img2/oumei.png', '欧美品牌', '../img/img2/f8.jpg', '../img/img2/f8_1.jpg', '../img/img2/f8_2.jpg', '../img/img2/f8_3.jpg', '￥', '751.00', '1243.00', '5折', '雅诗兰黛', '紧肤抗皱修复系列   肌源赋活修护精华霜', '80克  ', '已售3件');
INSERT INTO `listpage` VALUES ('9', '限时特卖', '../img/img2/oumei.png', '欧美品牌', '../img/img2/f9.jpg', '../img/img2/f9_1.jpg', '../img/img2/f9_2.jpg', '../img/img2/f9_3.jpg', '￥', '417.00', '2214.00', '5折', '雅诗兰黛', '紧肤抗皱修复系列   肌源赋活修护精华霜', '80克  ', '已售3件');
INSERT INTO `listpage` VALUES ('10', '限时特卖', '../img/img2/riben.png', '日本品牌', '../img/img2/f10.jpg', '../img/img2/f10_1.jpg', '../img/img2/f10_2.jpg', '../img/img2/f10_3.jpg', '￥', '321.00', '1422.00', '5折', '雅诗兰黛', '紧肤抗皱修复系列   肌源赋活修护精华霜', '80克  ', '已售3件');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'xiaoming', '666666', '');
INSERT INTO `user` VALUES ('2', 'xiaohong', 'd41d8cd98f00b204e9800998ecf8427e', '');
INSERT INTO `user` VALUES ('5', 'xiaoxin', 'd41d8cd98f00b204e9800998ecf8427e', '');
INSERT INTO `user` VALUES ('3', 'xiaodong', '8ddcff3a80f4189ca1c9d4d902c3c909', '');
INSERT INTO `user` VALUES ('6', 'xiaok', 'd41d8cd98f00b204e9800998ecf8427e', '');
INSERT INTO `user` VALUES ('7', 'xiaoj', 'd41d8cd98f00b204e9800998ecf8427e', '');
INSERT INTO `user` VALUES ('8', '1234', 'd41d8cd98f00b204e9800998ecf8427e', '');
INSERT INTO `user` VALUES ('9', '156465', 'd41d8cd98f00b204e9800998ecf8427e', '');
INSERT INTO `user` VALUES ('10', '', 'eac33da6fb1be3838fe2b18f20ed496b', '');
INSERT INTO `user` VALUES ('11', '12', 'f379eaf3c831b04de153469d1bec345e', '');
SET FOREIGN_KEY_CHECKS=1;
